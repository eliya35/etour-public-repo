from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from .forms import CreateUserForm, UpdateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group
from django.contrib.auth.views import PasswordChangeView, PasswordResetView
from django.contrib.messages.views import SuccessMessageMixin
from django.db import IntegrityError
from django.http import HttpResponse


def register_user(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, f'Hello {user} Your account has been set up')

                return redirect('login')

        context = {'form': form}
        return render(request, 'templates/registration.html', context)


def login_user(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)

                # Add the user to Adventure Group
                my_group = Group.objects.get(name='Adventures')
                users_list = [my_group.user_set.all()]

                if user not in users_list:
                    my_group.user_set.add(user)
                else:
                    pass

                return redirect('home')
            else:
                messages.warning(
                    request, 'Your password or username is incorrect')

        context = {}

        return render(request, 'templates/login.html', context)


def logout_user(request):
    logout(request)
    return redirect('login')


# @login_required
def update_username(request):
    try:
        user_form = UpdateUserForm(request.POST, instance=request.user)

        if user_form.is_valid():
            user_form.save()
            messages.success(request, 'Your profile is updated successfully')
            return redirect('profile')

        else:
            user_form = UpdateUserForm(instance=request.user)

        return render(request, 'templates/change_username.html', {'user_form': user_form})
        
    except IntegrityError:
        return HttpResponse("Cannot change the username")



class ChangePasswordView(SuccessMessageMixin, PasswordChangeView):
    template_name = "templates/change_password.html"
    success_message = "Successfully Changed Your Password"
    success_url = reverse_lazy('home')


class ResetPasswordView(SuccessMessageMixin, PasswordResetView):
    template_name = 'templates/password_reset.html'
    email_template_name = 'templates/password_reset_email.html'
    subjects_templates_name = 'templates/password_reset_subjects'
    success_message = "We've emailed you instructions for setting your password " \
                      "If an account exists with the email you entered. You should receive them shortly." \
                      "If you don't receive an email," \
                      "please make sure you've entered the email you registered with, and check your spam folder"
    success_url = reverse_lazy('login')
