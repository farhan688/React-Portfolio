import { GiTeacher, GiFlatfish } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';
import { RiComputerLine } from 'react-icons/ri';

const getDataExp = () => {
  return [
    {
      id: 1,
      icon: <RiComputerLine />,
      nama: 'Fullstack Web Developer',
      perusahaan: 'PT. Citiasia Internasional',
      time: 'Feb 2023 - Juni 2023',
      lokasi: 'Jakarta',
      description: 'Sebagai seorang Intern Full Stack Web Developer di Citiasia, tanggung jawab utama saya adalah mengembangkan dan memelihara produk SurveyAsia yang inovatif dan menarik di bidang survei online. Saya bertanggung jawab untuk menggabungkan keahlian front-end dan back-end dalam pengembangan aplikasi web yang responsif dan efisien.',
    }
  ];
};

export { getDataExp };
