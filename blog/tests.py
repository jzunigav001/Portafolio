import datetime

from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from django.urls import reverse

from .models import Post


class BlogViewsTests(TestCase):
    def setUp(self):
        self.post = Post.objects.create(
            title='Primer post',
            content='Contenido del primer post',
            image=SimpleUploadedFile('test.jpg', b'filecontent', content_type='image/jpeg'),
            date=datetime.date(2026, 4, 16),
        )

    def test_post_list_shows_link_to_detail(self):
        response = self.client.get(reverse('blog:posts'))

        self.assertContains(response, self.post.title)
        self.assertContains(response, reverse('blog:post_detail', args=[self.post.id]))

    def test_post_detail_renders_post_content(self):
        response = self.client.get(reverse('blog:post_detail', args=[self.post.id]))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.post.title)
        self.assertContains(response, self.post.content)
