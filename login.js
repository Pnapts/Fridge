// Alterna entre os formulários de login e cadastro
function toggleForm(formType) {
  if (formType === 'register') {
      document.getElementById('loginFormContainer').style.display = 'none';
      document.getElementById('registerFormContainer').style.display = 'block';
  } else {
      document.getElementById('loginFormContainer').style.display = 'block';
      document.getElementById('registerFormContainer').style.display = 'none';
  }
}

// Cadastro de novo usuário
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Verifica se o nome de usuário já está registrado
  if (users.some(user => user.username === newUsername)) {
      alert("Esse nome de usuário já está em uso.");
      return;
  }

  // Adiciona o novo usuário ao localStorage
  users.push({ username: newUsername, password: newPassword });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Cadastro realizado com sucesso!");
  toggleForm('login');  // Volta para o formulário de login
});

// Login de usuário existente
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      // Login bem-sucedido: armazena no localStorage e redireciona
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "index.html"; // Redireciona para a página principal
  } else {
      alert("Usuário ou senha inválidos");
  }
});

// Função de logout
function logout() {
    localStorage.removeItem("user"); // Remove o usuário logado do localStorage
    window.location.href = "login.html"; // Redireciona para a página de login
}

// Verifica se o usuário está logado ao acessar a página de login
if (window.location.pathname.includes('login.html')) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    // Se o usuário já estiver logado, redireciona para a página principal
    window.location.href = "index.html";
  }
}

// Verifica se o usuário está logado ao acessar a página de tarefas (index.html)
if (window.location.pathname.includes('index.html')) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    // Se o usuário não estiver logado, redireciona para a página de login
    window.location.href = "login.html";
  }
}
