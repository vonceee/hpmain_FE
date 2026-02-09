import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  description?: string;
  category?: string;
  authorName?: string;
  authorImage?: string;
  readTime?: string;
  timeAgo?: string;
  content?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}

  featuredNews: NewsItem = {
    id: '1',
    slug: 'hpi-partnership-mseuf',
    title:
      'Hytec Power Incorporated forges innovative partnership with Manual S. Enverga University foundation to drive academic growth.',
    image: 'assets/images/news/b92d05722a0336f1cbb860895fa25279936224f7.png',
    date: '15 Jan 2026',
    category: 'EDUCATIONAL',
    authorName: 'Noh Yunah',
    authorImage: 'assets/images/news/152864596.jpg',
    readTime: '5 minutes read',
    timeAgo: '10 minutes ago',
    content: `
      <p>Hytec Power Incorporated (HPI) has officially announced a strategic partnership with Manual S. Enverga University Foundation (MSEUF) aimed at fostering academic excellence and technological innovation. This collaboration marks a significant milestone in bridging the gap between industry standards and educational requisites.</p>
      
      <p>The partnership focuses on upgrading engineering laboratories, integrating smart classroom technologies, and providing comprehensive training modules for faculty members. By verifying that curriculum meets current industry demands, HPI and MSEUF are committed to producing graduates who are not just employable but are leaders in their respective fields.</p>
      
      <p>"We believe that education is the foundation of progress. By partnering with MSEUF, we are investing in the future of our nation's engineering and technical workforce," said the CEO of Hytec Power Inc.</p>
      
      <p>Key initiatives include:</p>
      <ul>
        <li>Installation of advanced automation and robotics labs.</li>
        <li>Curriculum development support to align with Industry 4.0.</li>
        <li>Internship and faculty immersion programs.</li>
      </ul>
      
      <p>This initiative is expected to benefit thousands of students and set a new benchmark for academic-industry partnerships in the region.</p>
    `,
  };

  educationalNews: NewsItem[] = [
    {
      id: '2',
      slug: 'advanced-laboratories-engineering',
      title: 'Advanced Laboratories for College Engineering',
      date: '17 August 2025',
      image: '/assets/images/news/edu-1.png',
      description:
        'HPI provides state-of-the-art laboratory equipment to upgrade engineering programs.',
      category: 'Educational',
      content: `
        <p>HPI has recently delivered a suite of advanced laboratory equipment to several partner colleges. This upgrade includes state-of-the-art test benches, simulation software, and hardware kits designed to give students hands-on experience with modern engineering concepts.</p>
        <p>The new laboratories cover areas such as electronics, fluid power, and renewable energy technology, ensuring students are well-versed in the tools they will encounter in the workforce.</p>
      `,
    },
    {
      id: '3',
      slug: 'revolutionizing-education-smart-classrooms',
      title: 'Revolutionizing Education with smart Classrooms',
      date: '12 September 2025',
      image: '/assets/images/news/edu-2.png',
      description: 'HPI launches new smart classroom solutions to enhance learning experiences.',
      category: 'Educational',
      content: `
        <p>Smart classrooms are transforming the way students learn and interact. HPI's new solution integrates interactive whiteboards, student response systems, and cloud-based learning management tools into a cohesive ecosystem.</p>
        <p>This technology facilitates hybrid learning, allows for real-time feedback, and increases student engagement significantly.</p>
      `,
    },
    {
      id: '4',
      slug: 'partnership-top-universities',
      title: 'Partnership with Top Universities',
      date: '05 October 2025',
      image: '/assets/images/news/edu-3.png',
      description:
        'Collaborating with leading universities to bridge the gap between industry and academe.',
      category: 'Educational',
      content: `
        <p>In a bid to strengthen the link between theory and practice, HPI has formalized agreements with top-tier universities. These partnerships will involve joint research projects, curriculum consultancy, and technology transfer.</p>
      `,
    },
    {
      id: '5',
      slug: 'new-training-modules-instructors',
      title: 'New Training Modules for Instructors',
      date: '20 November 2025',
      image: '/assets/images/news/edu-4.png',
      description: 'Empowering educators with the latest technology training and certifications.',
      category: 'Educational',
      content: `
        <p>To ensure sustainability in education modernization, HPI has rolled out new training modules specifically for instructors. These programs focus on pedagogy for technical subjects and the operation of new laboratory equipment.</p>
      `,
    },
    {
      id: '6',
      slug: 'advanced-laboratories-engineering-2',
      title: 'Advanced Laboratories for College Engineering',
      date: '17 August 2025',
      image: '/assets/images/news/edu-1.png',
      description:
        'HPI provides state-of-the-art laboratory equipment to upgrade engineering programs.',
      category: 'Educational',
      content: '<p>Content repetition for demo purposes.</p>',
    },
    {
      id: '7',
      slug: 'revolutionizing-education-smart-classrooms-2',
      title: 'Revolutionizing Education with smart Classrooms',
      date: '12 September 2025',
      image: '/assets/images/news/edu-2.png',
      description: 'HPI launches new smart classroom solutions to enhance learning experiences.',
      category: 'Educational',
      content: '<p>Content repetition for demo purposes.</p>',
    },
    {
      id: '8',
      slug: 'partnership-top-universities-2',
      title: 'Partnership with Top Universities',
      date: '05 October 2025',
      image: '/assets/images/news/edu-3.png',
      description:
        'Collaborating with leading universities to bridge the gap between industry and academe.',
      category: 'Educational',
      content: '<p>Content repetition for demo purposes.</p>',
    },
    {
      id: '9',
      slug: 'new-training-modules-instructors-2',
      title: 'New Training Modules for Instructors',
      date: '20 November 2025',
      image: '/assets/images/news/edu-4.png',
      description: 'Empowering educators with the latest technology training and certifications.',
      category: 'Educational',
      content: '<p>Content repetition for demo purposes.</p>',
    },
  ];

  industrialNews: NewsItem[] = [
    {
      id: '10',
      slug: 'hpi-launches-industrial-automation',
      title: 'HPI Launches New Industrial Automation line',
      date: '22 January 2026',
      image: '/assets/images/news/ind-1.png',
      description:
        'Introducing the latest in industrial automation technology for manufacturing efficiently.',
      category: 'Industrial',
      content: `
        <p>HPI is proud to unveil its latest line of industrial automation solutions. Designed to meet the rigorous demands of modern manufacturing, these systems promise higher efficiency, lower error rates, and increased safety.</p>
        <p>The lineup includes automated guided vehicles (AGVs), robotic arms, and smart sensors that integrate seamlessly with existing production lines.</p>
      `,
    },
    {
      id: '11',
      slug: 'sustainable-energy-solutions',
      title: 'Sustainable Energy Solutions for Factories',
      date: '10 December 2025',
      image: '/assets/images/news/ind-2.png',
      description: 'Helping factories reduce carbon footprint with our new green energy systems.',
      category: 'Industrial',
      content: `
        <p>With a focus on sustainability, HPI has introduced a range of energy solutions for factories. These include solar power integrations, energy-efficient motor controllers, and waste-to-energy systems.</p>
      `,
    },
    {
      id: '12',
      slug: 'robotics-integration-logistics',
      title: 'Robotics Integration in Logistics',
      date: '05 January 2026',
      image: '/assets/images/news/ind-3.png',
      description: 'Streamlining logistics operations with advanced robotics and AI integration.',
      category: 'Industrial',
      content: `
        <p>Logistics is seeing a major overhaul with HPI's robotics integration. From sorting to palletizing, our robots are designed to handle heavy loads with precision, speeding up the supply chain significantly.</p>
      `,
    },
    {
      id: '13',
      slug: 'iot-solutions-smart-manufacturing',
      title: 'IoT Solutions for Smart Manufacturing',
      date: '28 November 2025',
      image: '/assets/images/news/ind-4.png',
      description: 'Connecting machines and data for smarter, data-driven manufacturing decisions.',
      category: 'Industrial',
      content: `
        <p>The Industrial Internet of Things (IIoT) is here. HPI's IoT solutions allow manufacturers to monitor machine health, predict maintenance needs, and optimize production schedules in real-time.</p>
      `,
    },
    {
      id: '14',
      slug: 'hpi-launches-industrial-automation-2',
      title: 'HPI Launches New Industrial Automation line',
      date: '22 January 2026',
      image: '/assets/images/news/ind-1.png',
      description:
        'Introducing the latest in industrial automation technology for manufacturing efficiently.',
      category: 'Industrial',
      content: '<p>Content repetition for demo purposes.</p>',
    },
    {
      id: '15',
      slug: 'sustainable-energy-solutions-2',
      title: 'Sustainable Energy Solutions for Factories',
      date: '10 December 2025',
      image: '/assets/images/news/ind-2.png',
      description: 'Helping factories reduce carbon footprint with our new green energy systems.',
      category: 'Industrial',
      content: '<p>Content repetition for demo purposes.</p>',
    },
    {
      id: '16',
      slug: 'robotics-integration-logistics-2',
      title: 'Robotics Integration in Logistics',
      date: '05 January 2026',
      image: '/assets/images/news/ind-3.png',
      description: 'Streamlining logistics operations with advanced robotics and AI integration.',
      category: 'Industrial',
      content: '<p>Content repetition for demo purposes.</p>',
    },
    {
      id: '17',
      slug: 'iot-solutions-smart-manufacturing-2',
      title: 'IoT Solutions for Smart Manufacturing',
      date: '28 November 2025',
      image: '/assets/images/news/ind-4.png',
      description: 'Connecting machines and data for smarter, data-driven manufacturing decisions.',
      category: 'Industrial',
      content: '<p>Content repetition for demo purposes.</p>',
    },
  ];

  getFeaturedNews(): Observable<NewsItem> {
    return of(this.featuredNews);
  }

  getEducationalNews(): Observable<NewsItem[]> {
    return of(this.educationalNews);
  }

  getIndustrialNews(): Observable<NewsItem[]> {
    return of(this.industrialNews);
  }

  /**
   * Retrieves a news item by its slug.
   * Searches across Featured, Educational, and Industrial news.
   * @param slug The slug of the news item.
   * @returns The NewsItem if found, or undefined.
   */
  getNewsBySlug(slug: string): Observable<NewsItem | undefined> {
    // Check featured first
    if (this.featuredNews.slug === slug) {
      return of(this.featuredNews);
    }

    // Check educational
    const eduItem = this.educationalNews.find((item) => item.slug === slug);
    if (eduItem) return of(eduItem);

    // Check industrial
    const indItem = this.industrialNews.find((item) => item.slug === slug);
    if (indItem) return of(indItem);

    return of(undefined);
  }
}
