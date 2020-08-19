rm -rf html/
npm run build -p
rsync -azP -e 'ssh -p 2222' html/* root@185.39.11.13:/usr/share/nginx/asoftio/clients/infinitydancemiami/prod/infinitydancemiami/
