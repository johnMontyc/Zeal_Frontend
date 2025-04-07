/*
Este archivo contiene las pruebas unitarias para el componente `RegisterComponent`. Su propósito es garantizar que el componente funcione correctamente y que no haya errores en su configuración básica.

### Papel en el proyecto:
1. **Validación de la creación del componente**:
   - Asegura que el componente `RegisterComponent` se inicialice correctamente y que no haya errores en su configuración.

2. **Mantenimiento de la calidad del código**:
   - Las pruebas unitarias ayudan a detectar errores en etapas tempranas del desarrollo, evitando problemas en producción.

3. **Facilitar el mantenimiento**:
   - Si se realizan cambios en el componente, las pruebas aseguran que las funcionalidades básicas sigan funcionando como se espera.

4. **Integración en el flujo de desarrollo**:
   - Este archivo puede ser ejecutado automáticamente como parte de un sistema de integración continua (CI), garantizando que el componente pase las pruebas antes de ser desplegado.

En resumen, este archivo es esencial para garantizar la estabilidad y funcionalidad del componente `RegisterComponent`, que actúa como una parte clave del flujo de registro de usuarios en la plataforma.
*/

import { ComponentFixture, TestBed } from '@angular/core/testing'; // Herramientas para configurar y ejecutar pruebas unitarias
import { RegisterComponent } from './register.component'; // Componente que se va a probar

// Conjunto de pruebas para el componente RegisterComponent
describe('RegisterComponent', () => {
  let component: RegisterComponent; // Variable para almacenar la instancia del componente
  let fixture: ComponentFixture<RegisterComponent>; // Variable para manejar el entorno de pruebas del componente

  // Configuración inicial antes de ejecutar las pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent] // Importa el componente que se va a probar
    })
    .compileComponents(); // Compila los componentes necesarios para las pruebas

    // Crea una instancia del componente y su entorno de pruebas
    fixture = TestBed.createComponent(RegisterComponent); // Crea el entorno de pruebas para RegisterComponent
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta los cambios iniciales en el componente
  });

  // Prueba básica: verifica que el componente se cree correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprueba que la instancia del componente no sea nula o indefinida
  });
});
