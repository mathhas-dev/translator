# Base Backend

Sistema operacional recomendado: Linux (Ubuntu 20.0.4 ou outra distro)
IDE recomendada: Visual Studio Code

Instruções para instalação :
-Abra a pasta raiz "backend" na IDE
-Crie um ambiente virtual para compilar o projeto: python -m venv env
-Instale as bibliotecas utilizadas no projeto: pip install -r requirements.txt
-Na aba de debug, execute o projeto

* No arquivo: ".vscode/settings.json" está a especificação do projeto, para que o interpretador compreenda que os arquivos utilizados/criados estão na pasta "base". Para utilizar outra IDE, copie esse arquivo para o diretório principal, caso o interpretador não identifique os imports.  

* Super usuários são passados por alto para o django-guardian, para realizar testes válidos, criar usuários manualmente

**Antes de executar o requirements.txt, instalar: 'sudo apt install libmysqlclient-dev'**