## Compilação e Testes

criamos o CI de forma manual, criando o arquivo .yml na pasta "../.github/workflows"
Seguindo a documentação do próprio github, dizemos que os jobs deverão acontecer sempre que rodar um push (on: [push])
fizemos com que eles rodassem na última versão do Ubunto (runs-on: ubuntu-latest)
então foi só dar os passos:
    steps:
    - name: rodar os testes
      run: 
        npm install
        npm test
        
## Qualidade De Codigo:

Utilizamos a documentação do Code Inspector Github Action para verificar o código seguindo a [Documentação](https://github.com/marketplace/actions/code-inspector-github-action)

Em resumo, colocamos as chaves em segredos no github para pegálas usando os comandos ${{ secrets.CODE_INSPECTOR_ACCESS_KEY }} e ${{ secrets.CODE_INSPECTOR_SECRET_KEY }}, então configuramos o resto opcional.

[README.md](https://github.com/GabrielBFelix/Line_Bus/blob/main/README.md)
