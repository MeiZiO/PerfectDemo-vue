let data = [
    {
      name: '从HHTP升级到HTTPS,WebSocket无法连接',
      type: ['webSocket'],
      show: true,
      detail: `此升级需要前端和服务器,更改配置`,
      reason: `
      前端将ws:/修改为wss:/
      <br/>  ngnix增加如下配置
      <br/>  location /wss/ {
      <br/>&nbsp;&nbsp;  proxy_pass http://10.4.6.210:18091;           // 这个是后台地址
      <br/>&nbsp;&nbsp;   proxy_http_version 1.1;
      <br/>&nbsp;&nbsp;   proxy_set_header Upgrade $http_upgrade;
      <br/>&nbsp;&nbsp;   proxy_set_header Connection "Upgrade";
      <br/>&nbsp;&nbsp;   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      <br/>&nbsp;&nbsp;   proxy_set_header X-Real-IP $remote_addr;
      <br/>  }`
    },
  ]
  export default data