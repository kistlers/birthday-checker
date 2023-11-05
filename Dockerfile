# Use an official Nginx runtime as the base image
FROM nginx:latest

# Copy your website content from the 'dist' directory to the Nginx HTML root directory
COPY ./dist /usr/share/nginx/html/
