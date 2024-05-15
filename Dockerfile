# 使用官方的 Node.js 22 镜像作为构建环境
FROM node:22 AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 全局安装 Angular CLI
RUN npm install -g @angular/cli

# 复制项目文件
COPY . .

# 构建 Angular 应用
RUN ng build --configuration production

# 使用 Nginx 作为生产环境的服务器
FROM nginx:alpine

# 复制构建的文件到 Nginx 的 html 目录
COPY --from=build /app/dist/accounting-ui/browser /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]


