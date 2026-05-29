# Módulo de Ciberseguridad: Verificación de Primalidad en Tokens de Acceso

Este módulo interactivo aplica la teoría de números primos para resolver un desafío real en el ámbito de la seguridad informática y la protección de infraestructuras digitales

---

## 🛡️ Contexto del Problema Real
En el entorno de la seguridad informática actual, la validación de accesos y el cifrado de datos confían ciegamente en las propiedades numéricas para evitar filtraciones. Los sistemas modernos generan tokens numéricos aleatorios y complejos para autenticar usuarios. 

Una vulnerabilidad común ocurre cuando estos sistemas emplean patrones predecibles o números compuestos simples que los atacantes pueden adivinar fácilmente mediante fuerza bruta. Para mitigar esto, algoritmos criptográficos esenciales (como RSA) utilizan propiedades de **indivisibilidad**[cite: 12]. [cite_start]Este sistema simula un firewall lógico que analiza las propiedades aritméticas de un código para determinar si cumple con los criterios de aislamiento numérico óptimos antes de autorizar su uso en redes de datos.

---

## ⚙️ Características Clave del Sistema

**Validación en Tiempo Real:** El sistema inspecciona instantáneamente cualquier token cargado a través del formulario web por el usuario.
**Control Lógico de Residuos:** Emplea el operador matemático módulo (`%`) para calcular con precisión aritmética cuántos divisores exactos tiene el token ingresado.
* **Análisis de Vulnerabilidad Modular:** Si un número posee más de dos divisores, el programa expone dinámicamente un diagnóstico alertando cuántos factores exactos posee, clasificándolo como inseguro.
**Interfaz Adaptable (Responsiva):** Diseñado con una interfaz estilo terminal de comandos técnica que se ajusta a computadoras de escritorio, tablets y pantallas móviles de manera fluida.

---

## 🧮 Explicación del Algoritmo Producido

El núcleo de control de este software funciona mediante una evaluación por conteo lineal estructurada de la siguiente manera:

1. **Captura Limpia:** A través del uso estricto de la instrucción `document.getElementById()`, el sistema toma la clave digital provista por el usuario y la transforma en un valor entero controlable.
2. **Ciclo Iterativo Controlado:** Se ejecuta un bucle `for` que arranca en $1$ y avanza secuencialmente unidad por unidad hasta llegar exactamente al número bajo inspección.
3. **Filtro Modular Exacto:** En cada paso del bucle, se analiza si el residuo de la división es exactamente cero. Si se confirma esta condición, un acumulador (`contador`) incrementa su valor.
4. **Sentencia de Primalidad:** Por regla de la aritmética abstracta, un número primo es únicamente divisible entre la unidad y él mismo. Si al finalizar el bucle el acumulador registró exactamente **2 divisores**, la plataforma certifica el token como "Acceso Seguro". Cualquier otro resultado activa la alerta de vulnerabilidad en pantalla.

---

## 🛠️ Tecnologías Empleadas
* **HTML5:** Estructuración semántica de las secciones de control y formularios de ingreso de datos.
* **CSS3:** Estilo de interfaz oscura y reglas responsivas avanzadas mediante *media queries*.
* **JavaScript (Vanilla JS):** Motor dinámico para procesamiento matemático y manipulación directa del DOM.
* numeros primos/
*   ├── index.html
*   |── README.md
*   |
*   |── css/
*   |   └ ── estilos.css
*   |
*   └js/
*     └─ script-primos.js 
