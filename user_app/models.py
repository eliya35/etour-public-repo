from django.db import models
from tour_app.models import Tour
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)  # to field id
    # avatar = models.ImageField(default='avatars/avatar_2x.png', upload_to ='avatars')
    profile_avatar = models.ImageField(null=True, unique=True, upload_to='avatars')
    location = models.CharField(max_length=100, blank=True)
    mobile = models.CharField(max_length=20)
    bio = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username}`s Profile"


class Comment(models.Model):
    username = models.ForeignKey(User,
                                 to_field='username',
                                 on_delete=models.CASCADE
                                 )
    user_id = models.ForeignKey(User,
                                on_delete=models.CASCADE,
                                related_name='%(class)s_user_id',
                                )
    comment_avatar_url = models.URLField(max_length=2000, null=True)
    # comment_avatar = models.ForeignKey(Profile, on_delete=models.CASCADE, to_field='profile_avatar', null=True)
    tour_site_id = models.ForeignKey(Tour, on_delete=models.CASCADE)
    body = models.TextField()
    parent_id = models.PositiveBigIntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'comment'
        verbose_name_plural = 'comments'
        db_table = 'user_comments'
        ordering = ['-created_at']

    def __str__(self):
        return self.body


class Rating(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    tour_site_id = models.ForeignKey(Tour, on_delete=models.CASCADE)
    num_stars = models.PositiveIntegerField()

    class Meta:
        verbose_name = 'rating'
        verbose_name_plural = 'ratings'
        db_table = 'user_ratings'
