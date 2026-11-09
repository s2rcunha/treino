# Meu Treino — PWA para GitHub Pages

Arquivos prontos para a raiz do repositório **treino**:

- `index.html` — aplicativo com planos, marcações, edição e backup JSON
- `manifest.webmanifest` — metadados de instalação
- `sw.js` — cache para uso offline
- `icons/` — ícones necessários para instalação

## Publicar no GitHub

1. Envie todos os arquivos e a pasta `icons` para a raiz do repositório `treino`.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, selecione **main** e **/(root)** e salve.
3. Acesse `https://SEU-USUARIO.github.io/treino/` pelo celular.
4. Use a opção **Instalar** (quando disponível) ou **Adicionar à Tela de Início** no navegador.

## Persistência de dados

As marcações são armazenadas no `localStorage` do endereço em que o site é aberto. Elas permanecem após fechar e reabrir no mesmo navegador/perfil enquanto os dados do site forem preservados. Alterar endereço, limpar dados do navegador ou mudar de aparelho pode retirar os registros; por isso, exporte um **Backup JSON** e use **Restaurar** quando necessário.

Se você já usava o HTML como arquivo local, faça backup no HTML antigo e restaure-o no PWA hospedado. O navegador não transfere automaticamente o armazenamento de `file://` para o GitHub Pages.

## Atualizações

Ao publicar uma nova versão, altere `CACHE_NAME` em `sw.js` (por exemplo, `meu-treino-pwa-v2`). Não apague dados do site para forçar atualização, porque isso apagaria os registros salvos.
