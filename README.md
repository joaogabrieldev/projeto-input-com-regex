# 📝 Input com RegEx

Um projeto web simples que demonstra a formatação automática de campos de entrada usando Expressões Regulares (RegEx) para CPF e telefone.

## 🚀 Funcionalidades

- **Formatação automática de CPF**: Aplica máscara XXX.XXX.XXX-XX em tempo real
- **Formatação automática de telefone**: Aplica máscara (XX) XXXXX-XXXX em tempo real
- **Validação em tempo real**: Usa RegEx para garantir formato correto
- **Navegação automática**: Foco automático no campo de telefone após CPF completo
- **Interface responsiva**: Design moderno e adaptável

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica da página
- **CSS3** - Estilização e responsividade
- **JavaScript (ES6+)** - Lógica de formatação e interatividade

### Recursos Externos
- **Google Fonts** - Famílias Inter e Roboto
- **Fontes Locais** - Mozilla Text Variable Font

## 📁 Estrutura do Projeto

```
projeto-input-com-regex/
├── 📄 index.html          # Página principal HTML
├── 🎨 style.css           # Estilos CSS
├── ⚙️ script.js           # Lógica JavaScript
├── 🔤 fonts/              # Fontes locais
│   └── MozillaText-VariableFont_wght.ttf
├── 🖼️ imgs/               # Imagens do projeto
└── 📜 LICENSE             # Licença do projeto
```

## 🔧 Padrões de Projeto Implementados

### 1. **Separação de Responsabilidades**
- HTML para estrutura
- CSS para apresentação
- JavaScript para comportamento

### 2. **Event-Driven Programming**
- Uso de event listeners para capturar mudanças nos inputs
- Formatação automática em tempo real

### 3. **Modularização de Funções**
- `formatarCPF()` - Lógica específica para formatação de CPF
- `formatarTEL()` - Lógica específica para formatação de telefone

### 4. **CSS Custom Properties (Variáveis)**
- Uso de variáveis CSS para fontes e cores
- Facilita manutenção e consistência visual

### 5. **Responsive Design**
- Uso de unidades dinâmicas (dvh, dvw)
- Layout flexbox para centralização
- Media queries implícitas através de unidades relativas

## 📱 Funcionalidades Técnicas

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

## 🚀 Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` em um navegador web
3. Teste a formatação digitando nos campos de CPF e telefone

## 📋 Requisitos

- Navegador web moderno com suporte a ES6+
- Conexão com internet (para carregar Google Fonts)

## 👨‍💻 Autor

**João G. R. Rocha**
- [LinkedIn](https://www.linkedin.com/in/joaogabrielrocha/)

## 📄 Licença

Este projeto está sob a licença especificada no arquivo `LICENSE`.

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!** 