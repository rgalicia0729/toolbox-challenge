'use strict'

class Controller {
  // Metodo para revertir el texto y validar si el mismo es palindromo
  isPalindrome({ text }) {
    return new Promise((resolve, reject) => {
      if (!text) {
        reject('no text');
      }

      // Instrucción para revertir el texto
      const reversedText = text.split('').reverse().join('');

      resolve({
        text: reversedText,
        palindrome: text === reversedText
      });
    });
  }
}

module.exports = {
  Controller
}
