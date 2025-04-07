/*
Este archivo contiene las pruebas unitarias para el componente `HomeComponent`. Su propósito es garantizar que el componente funcione correctamente y que no haya errores en su configuración básica.

### Papel en el proyecto:
1. **Validación de la creación del componente**:
   - Asegura que el componente `HomeComponent` se inicialice correctamente y que no haya errores en su configuración.

2. **Mantenimiento de la calidad del código**:
   - Las pruebas unitarias ayudan a detectar errores en etapas tempranas del desarrollo, evitando problemas en producción.

3. **Facilitar el mantenimiento**:
   - Si se realizan cambios en el componente, las pruebas aseguran que las funcionalidades básicas sigan funcionando como se espera.

4. **Integración en el flujo de desarrollo**:
   - Este archivo puede ser ejecutado automáticamente como parte de un sistema de integración continua (CI), garantizando que el componente pase las pruebas antes de ser desplegado.

En resumen, este archivo es esencial para garantizar la estabilidad y funcionalidad del componente `HomeComponent`, que actúa como una parte clave de la interfaz de usuario en la aplicación.
*/

// Importaciones necesarias para las pruebas unitarias
import { ComponentFixture, TestBed } from '@angular/core/testing'; // Herramientas para configurar y ejecutar pruebas
import { HomeComponent } from './home.component'; // Componente que se va a probar

// Descripción del conjunto de pruebas para el componente HomeComponent
describe('HomeComponent', () => {
  let component: HomeComponent; // Variable para almacenar la instancia del componente
  let fixture: ComponentFixture<HomeComponent>; // Variable para manejar el entorno de pruebas del componente

  // Configuración inicial antes de ejecutar las pruebas
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      imports: [HomeComponent] // Importa el componente que se va a probar
    })
    .compileComponents(); // Compila los componentes necesarios para las pruebas

    // Crea una instancia del componente y su entorno de pruebas
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta los cambios iniciales en el componente
  });

  // Prueba básica: verifica que el componente se cree correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprueba que la instancia del componente no sea nula o indefinida
  });
});
