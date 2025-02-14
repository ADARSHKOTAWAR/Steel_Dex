import React from 'react';
import {
  Building2,
  ClipboardList,
  Calculator,
  Layers,
  Grid,
  Triangle,
  Box,
  Home,
  Building,
  MonitorPlay,
  FileSpreadsheet,
  Factory,
} from 'lucide-react';

const capabilities = [
  {
    icon: Building2,
    title: 'Pre-Engineering Metal Building',
    description: 'Comprehensive steel detailing solutions for pre-engineered metal building systems.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Take Off Material',
    description: 'Accurate material estimation to streamline project execution and budgeting.',
  },
  {
    icon: Calculator,
    title: 'Estimating of Project',
    description: 'Precise project estimation services to ensure cost-effective and timely delivery.',
  },
  {
    icon: Layers,
    title: 'Insulated or Sandwich Wall and Roof Panel',
    description: 'Efficient detailing of insulated and sandwich panels for superior thermal performance.',
  },
  {
    icon: Grid,
    title: 'Joist & Decking',
    description: 'Accurate joist and decking detailing for robust and durable floor and roof systems.',
  },
  {
    icon: Triangle,
    title: 'Hip, Valley, and Skewed Frame',
    description: 'Specialized detailing of complex roof frames like hip, valley, and skewed designs.',
  },
  {
    icon: Box,
    title: 'Cold Formed Steel (CFS)',
    description: 'Precision detailing for lightweight and versatile cold-formed steel structures.',
  },
  {
    icon: Home,
    title: 'Self & Mini Storage',
    description: 'Customized detailing solutions for secure and space-efficient mini storage buildings.',
  },
  {
    icon: Building,
    title: 'Structure Detailing',
    description: 'Expert structural detailing to enhance stability and performance of projects.',
  },
  {
    icon: MonitorPlay,
    title: 'Tekla and AutoCAD Work',
    description: 'Professional modeling and drafting services using Tekla and AutoCAD software.',
  },
  {
    icon: Factory,
    title: 'Industrial Sheds',
    description: 'Robust steel detailing for large-scale industrial sheds ensuring durability and space optimization.',
  },
];

const About = () => {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">About Steel Dex</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are industry leaders in providing comprehensive steel detailing solutions,
            combining technical expertise with innovative approaches to deliver
            exceptional results for our clients.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-gray-200 hover:border-orange-500 hover:bg-orange-100"
            >
              <div className="flex items-center mb-4">
                <capability.icon className="h-8 w-8 text-secondary" />
                <h3 className="text-lg font-semibold text-primary ml-3">
                  {capability.title}
                </h3>
              </div>
              <p className="text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
