// генерация css-кода с помощью OpenAI
// function generateCSSCode(token) {
//     return new Promise((resolve, reject) => {
//         const apiKey = 'api_key_openai';
//         const requestData = {
//             messages: [
//                 {
//                     role: 'user',
//                     content: `Generate CSS code for style: ${token}`
//                 }
//             ],
//             model: 'gpt-4'
//         };
//         fetch('https://api.openai.com/v1/engines/davinci/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${apiKey}`
//             },
//             body: JSON.stringify(requestData)
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.choices && data.choices.length > 0) {
//                 resolve(data.choices[0].text.trim());
//             } else {
//                 reject(new Error('Failed to generate CSS code'));
//             }
//         })
//         .catch(error => {
//             reject(error);
//         });
//     });
// }