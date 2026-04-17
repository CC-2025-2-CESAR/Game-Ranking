#!/bin/bash
echo "Running Django migrations..."
python manage.py migrate --noinput
echo "Setting gabeitch password..."
python manage.py shell -c "from django.contrib.auth import get_user_model; U=get_user_model(); u, created = U.objects.get_or_create(username='gabeitch', defaults={'is_staff': True, 'is_superuser': True}); u.is_staff=True; u.is_superuser=True; u.set_password('GameRanking@2026!'); u.save(); print('CREATED' if created else 'UPDATED', 'PASSWORD SET OK')"
echo "Starting gunicorn..."
gunicorn Game_Ranking.wsgi:application --bind 0.0.0.0:8000
