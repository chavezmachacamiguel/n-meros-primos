/**
 * DESAFÍO WEB: VALIDADOR CRIPTOGRÁFICO DE ACCESOS
 * Algoritmo de Verificación de Números Primos para Ciberseguridad
 */

function inspeccionarToken() {
    // 1. CAPTURA DE DATOS (Uso estricto de document.getElementById como pide la restricción)
    // Extraemos el valor del input y lo transformamos a un número entero con parseInt
    let tokenValue = document.getElementById("tokenInput").value;
    let pantallaEstado = document.getElementById("resultadoValidacion");
    
    let numero = parseInt(tokenValue);
    
    // 2. INICIALIZACIÓN DEL CONTADOR (Lógica oficial de la sección 8.B del documento)
    // Esta variable almacenará cuántas divisiones exactas encontramos
    let contador = 0;
    
    // Control de seguridad inicial: Si el usuario ingresa un número menor o igual a 1,
    // sabemos por regla matemática que no se considera primo.
    if (numero <= 1) {
        pantallaEstado.innerHTML = `
            <div style="color: #c0392b; padding: 10px; background-color: #f8d7da; border-radius: 4px; border: 1px solid #f5c6cb;">
                <strong>✖ ALERTA:</strong> El número <strong>${numero}</strong> no es un token válido para encriptación. Los números primos deben ser mayores que 1.
            </div>
        `;
        return; // Detiene la ejecución de la función
    }
    
    // 3. EL CICLO DE EVALUACIÓN (Bucle For)
    // Recorremos todos los números desde el 1 hasta el número ingresado por el usuario
    for (let i = 1; i <= numero; i++) {
        
        // El operador '%' obtiene el residuo de la división. 
        // Si el residuo es 0, significa que 'i' es un divisor exacto de nuestro número.
        if (numero % i == 0) {
            contador++; // Incrementamos el contador de divisores exactos
        }
    }
    
    // 4. VERIFICACIÓN DE LA REGLA DE PRIMALIDAD Y RENDERIZADO EN PANTALLA
    // Un número primo tiene la propiedad única de tener EXACTAMENTE 2 divisores (el 1 y sí mismo)
    if (contador == 2) {
        // Manipulación del DOM para mostrar el resultado directamente en la página web (no en consola)
        pantallaEstado.innerHTML = `
            <div style="color: #27ae60; padding: 15px; background-color: #d4edda; border-radius: 4px; border: 1px solid #c3e6cb;">
                <strong>✔ ACCESO SEGURO:</strong> El código <strong>${numero}</strong> es un número primo. 
                <br><small>Posee únicamente ${contador} divisores exactos. Cumple con los estándares criptográficos de aislamiento numérico.</small>
            </div>
        `;
    } else {
        // Si tiene más de 2 divisores, el número es compuesto (vulnerable)
        pantallaEstado.innerHTML = `
            <div style="color: #c0392b; padding: 15px; background-color: #f8d7da; border-radius: 4px; border: 1px solid #f5c6cb;">
                <strong>✖ ALERTA DE VULNERABILIDAD:</strong> El código <strong>${numero}</strong> NO es primo. 
                <br><small>Se detectaron ${contador} divisores exactos. Este patrón es predecible y vulnerable a ataques de fuerza bruta.</small>
            </div>
        `;
    }
}