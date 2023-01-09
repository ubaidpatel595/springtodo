
<%@page import="com.Todo.Repo.User"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>


<!doctype html><html lang="en"><head>

 <!-- Update states dynamically -->
  <%String[] result = (String[]) request.getAttribute("result");
  User user = (User) request.getAttribute("user");
  %>
 <script>
localStorage.authResponse='["<%=result[0]%>","<%=result[1]%>"]';
localStorage.todos='<%=result[2]%>';
localStorage.todoSync="true";
localStorage.user='{"mobile":"<%=user.getMobile()%>","password":"<%=user.getPassword()%>"}';
</script>
<meta charset="utf-8"/><link rel="icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="apple-touch-icon" href="/logo192.png"/><link rel="manifest" href="/manifest.json"/><title>React App</title><script defer="defer" src="/static/js/main.62c5c3b1.js"></script><link href="/static/css/main.0ac97ad3.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>





