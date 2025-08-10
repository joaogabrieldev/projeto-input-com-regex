# 📝 Input com RegEx

Um projeto web simples que demonstra a formatação automática de campos de entrada usando Expressões Regulares (RegEx) para CPF e telefone.

## 🌐 Teste agora

**[Clique Aqui ⭐](https://regex-input.vercel.app/)** - Site disponível para uso

## 🚀 Funcionalidades

- **Formatação automática de CPF**: Aplica máscara XXX.XXX.XXX-XX em tempo real
- **Formatação automática de telefone**: Aplica máscara (XX) XXXXX-XXXX em tempo real
- **Validação em tempo real**: Usa RegEx para garantir formato correto
- **Navegação automática**: Foco automático no campo de telefone após CPF completo
- **Interface responsiva**: Design moderno e adaptável

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica da página
- **CSS3** - Estilização e responsividade
- **JavaScript (ES6+)** - Lógica de formatação e interatividade
- **RegEx**: Para verificação de padrões

### Recursos Externos
- **Google Fonts** - Famílias Inter e Roboto
- **Fontes Locais** - Mozilla Text Variable Font

### Formatação de CPF
```javascript
// Remove caracteres não numéricos
let valorLimpo = input.value.replace(/\D/g, "");

// Aplica máscara: XXX.XXX.XXX-XX
if (valorLimpo.length > 9) {
  valorFormatado = valorLimpo.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );
}
```

### Formatação de Telefone
```javascript
// Aplica máscara: (XX) XXXXX-XXXX
if (valorLimpo.length > 7) {
  valorFormatado = valorLimpo.replace(
    /(\d{2})(\d{5})(\d{4})/,
    "($1) $2-$3"
  );
}
```

## 🎨 Características de Design

- **Paleta de cores**: Azul (#1d3557, #26518f) com fundo neutro (#f0f2f5)
- **Tipografia**: Mozilla Text como fonte principal, Roboto e Inter como secundárias
- **Sombras**: Efeitos de profundidade com box-shadow
- **Transições**: Animações suaves em hover e focus
- **Bordas arredondadas**: Design moderno com border-radius

## 🌐 Teste agora

**[Demo Online](https://regex-input.vercel.app/)** - Teste o projeto diretamente no navegador

## 👨‍💻 Autor

**João G. R. Rocha**
- [LinkedIn](https://www.linkedin.com/in/joaogabrielrocha/)

⭐ **Se este projeto foi útil para você, considere dar uma estrela!** 