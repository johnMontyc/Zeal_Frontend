import { TestBed } from '@angular/core/testing'; // Importa herramientas para configurar y ejecutar pruebas unitarias
import { AppComponent } from './app.component'; // Importa el componente principal de la aplicación

// Describe el conjunto de pruebas para el componente AppComponent
describe('AppComponent', () => {
  // Configuración inicial antes de ejecutar las pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importa el componente AppComponent para las pruebas
    }).compileComponents(); // Compila los componentes necesarios para las pruebas
  });

  // Prueba básica: verifica que el componente se cree correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea el entorno de pruebas para AppComponent
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app).toBeTruthy(); // Comprueba que la instancia del componente no sea nula o indefinida
  });

  // Prueba: verifica que el título del componente sea 'front'
  it(`should have the 'front' title`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea el entorno de pruebas para AppComponent
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app.title).toEqual('front'); // Comprueba que la propiedad `title` sea igual a 'front'
  });

  // Prueba: verifica que el título se renderice correctamente en el DOM
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea el entorno de pruebas para AppComponent
    fixture.detectChanges(); // Detecta los cambios iniciales en el componente
    const compiled = fixture.nativeElement as HTMLElement; // Obtiene el DOM renderizado del componente
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, front'); // Comprueba que el texto del título contenga 'Hello, front'
  });
});

/*
### Papel en el proyecto:
1. **Validación de la creación del componente**:
   - Asegura que el componente `AppComponent` se inicialice correctamente y que no haya errores en su configuración.

2. **Pruebas de propiedades**:
   - Verifica que las propiedades clave del componente, como `title`, tengan los valores esperados.

3. **Pruebas de renderizado**:
   - Comprueba que el contenido del componente se renderice correctamente en el DOM, asegurando que los elementos visuales sean consistentes.

4. **Mantenimiento de la calidad del código**:
   - Las pruebas unitarias ayudan a detectar errores en etapas tempranas del desarrollo, evitando problemas en producción.

En resumen, este archivo es esencial para garantizar la estabilidad y funcionalidad del componente principal de la aplicación, validando tanto su configuración como su comportamiento visual.
*/
