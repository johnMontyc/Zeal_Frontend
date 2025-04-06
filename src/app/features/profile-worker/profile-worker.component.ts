import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-worker',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './profile-worker.component.html',
  styleUrls: ['./profile-worker.component.css']
})
export class ProfileWorkerComponent implements OnInit {
  workerId: string | null = null; // ID del trabajador capturado de la URL
  workerData: any = null; // Datos del trabajador actual

  // Datos de los trabajadores
  workers = {
    claudia: {
      name: 'Claudia',
      role: 'Especialista en instalación de paneles solares',
      location: '📍 Ciudad de México',
      phone: '+52 55 1234 5678',
      email: 'claudia@example.com',
      functions: [
        'Instalación de paneles solares residenciales.',
        'Asesoramiento en proyectos de energía solar.',
        'Mantenimiento de sistemas solares.'
      ],
      image: 'assets/customers/claudia.jpg'
    },
    margaret: {
      name: 'Margaret',
      role: 'Ingeniera en sistemas de energía renovable',
      location: '📍 Monterrey',
      phone: '+52 81 9876 5432',
      email: 'margaret@example.com',
      functions: [
        'Diseño de sistemas de energía renovable.',
        'Supervisión de proyectos de energía eólica.',
        'Optimización de recursos energéticos.'
      ],
      image: 'assets/customers/margaret.jpg'
    },
    carla: {
      name: 'Carla',
      role: 'Técnica en mantenimiento eléctrico',
      location: '📍 Guadalajara',
      phone: '+52 33 8765 4321',
      email: 'carla@example.com',
      functions: [
        'Mantenimiento preventivo de sistemas eléctricos.',
        'Reparación de fallas eléctricas.',
        'Instalación de sistemas eléctricos industriales.'
      ],
      image: 'assets/customers/carla.jpg'
    },
    sofia: {
      name: 'Sofía',
      role: 'Asesora en proyectos de energía sostenible',
      location: '📍 Puebla',
      phone: '+52 22 3456 7890',
      email: 'sofia@example.com',
      functions: [
        'Asesoramiento en proyectos de energía sostenible.',
        'Evaluación de impacto ambiental.',
        'Optimización de recursos energéticos.'
      ],
      image: 'assets/customers/sofia.jpg'
    },
    manuel: {
      name: 'Manuel',
      role: 'Instalador de paneles solares industriales',
      location: '📍 Querétaro',
      phone: '+52 44 9876 5432',
      email: 'manuel@example.com',
      functions: [
        'Instalación de paneles solares industriales.',
        'Supervisión de proyectos de energía solar.',
        'Capacitación en sistemas solares.'
      ],
      image: 'assets/customers/manuel.jpg'
    },
    julia: {
      name: 'Julia',
      role: 'Consultora en eficiencia energética',
      location: '📍 Mérida',
      phone: '+52 99 1234 5678',
      email: 'julia@example.com',
      functions: [
        'Consultoría en eficiencia energética.',
        'Diseño de estrategias de ahorro energético.',
        'Implementación de soluciones sostenibles.'
      ],
      image: 'assets/customers/julia.jpg'
    },
    fernando: {
      name: 'Fernando',
      role: 'Experto en instalación de baterías solares',
      location: '📍 Tijuana',
      phone: '+52 66 8765 4321',
      email: 'fernando@example.com',
      functions: [
        'Instalación de baterías solares.',
        'Mantenimiento de sistemas de almacenamiento de energía.',
        'Optimización de sistemas solares.'
      ],
      image: 'assets/customers/fernando.jpg'
    },
    carlos: {
      name: 'Carlos',
      role: 'Ingeniero en energías renovables',
      location: '📍 León',
      phone: '+52 47 3456 7890',
      email: 'carlos@example.com',
      functions: [
        'Diseño de sistemas de energía renovable.',
        'Supervisión de proyectos de energía eólica y solar.',
        'Investigación en tecnologías sostenibles.'
      ],
      image: 'assets/customers/carlos.jpg'
    },
    carmen: {
      name: 'Carmen',
      role: 'Especialista en climatización solar',
      location: '📍 Cancún',
      phone: '+52 99 8765 4321',
      email: 'carmen@example.com',
      functions: [
        'Diseño e instalación de sistemas de climatización solar.',
        'Mantenimiento de sistemas de climatización.',
        'Asesoramiento en proyectos de energía solar.'
      ],
      image: 'assets/customers/carmen.jpg'
    },
    zun: {
      name: 'Zun',
      role: 'Asesor en soluciones de energía renovable',
      location: '📍 Oaxaca',
      phone: '+52 95 1234 5678',
      email: 'zun@example.com',
      functions: [
        'Asesoramiento en soluciones de energía renovable.',
        'Evaluación de proyectos sostenibles.',
        'Capacitación en tecnologías renovables.'
      ],
      image: 'assets/customers/zun.jpg'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.workerId = this.route.snapshot.paramMap.get('id');
    if (this.workerId && this.workerId in this.workers) {
      this.workerData = this.workers[this.workerId as keyof typeof this.workers];
    }
  }
}
