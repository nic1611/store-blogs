# Store Blogs
##### Projeto de visualização, cadastro, e edição de blogs.

## Localize
* [Imagens](#imagens)
* [Instalação](#instalação)
* [Tecnologias](#tecnologias)

## Imagens
![Alt text](/Imagens/Home.PNG?raw=true "Tela de produto")
![Alt text](/Imagens/Modal.PNG?raw=true "Modal para adicionar novo iten")

## Instalação
##### Após clonar o repositório digite os comandos: 

```bash
$ cd Store.Blogs
$ dotnet build
$ dotnet restore
$ dotnet ef migrations add MyFirstMigration
$ dotnet ef database update
$ dotnet run
```
```bash
$ cd ../Store-Blogs-UI
$ npm install
$ ng serve -o
```


## Tecnologias
* [angular](https://angular.io/)
* [angular material](https://material.angular.io/)
* [aspnet](https://dotnet.microsoft.com/apps/aspnet) 
* [entity framework core](https://docs.microsoft.com/pt-br/ef/core/)
* [sqlite](https://docs.microsoft.com/pt-br/ef/core/)