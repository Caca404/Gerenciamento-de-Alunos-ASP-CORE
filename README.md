# Gerenciamento de Alunos em ASP.NET CORE e React
Gerenciador de alunos em uma escola com API em ASP.NET CORE e Client-Side com React

## Passos para iniciar o site para desenvolvimento
1. Para iniciar o servidor SQL server, necessita colocar a _string connection_ desejada no _appsettings.json_.
2. Após isso, deve fazer as migrações para o servidor:
  * Pelo CLI .NET Core, deve fazer o comando:
        
        dotnet ef database update
        
  * Pelo Visual Code, deve fazer o comando:
        
        Update-Database

3. Por seguinte, deve-se fazer o comando, dentro da pasta onde fica o projeto .sln, para subir a API:
    
        dotnet run
    
4. Dentro da pasta "escolareact", deve iniciar o site com o comando:

        npm start
