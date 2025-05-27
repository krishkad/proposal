"use client"
import React from 'react';
import { Plus, Tag, Star, Clock, FileText } from 'lucide-react';

interface TemplatesProps {
  onPageChange: (page: string) => void;
}

const Templates: React.FC<TemplatesProps> = ({ onPageChange }) => {
  const templates = [
    {
      id: 1,
      title: 'SaaS Platform Proposal',
      description: 'Comprehensive proposal template for software as a service offerings',
      category: 'SaaS',
      difficulty: 'Intermediate',
      estimatedTime: '45 min',
      uses: 127,
      rating: 4.8,
      tags: ['Software', 'B2B', 'Platform'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'Digital Marketing Campaign',
      description: 'Complete digital marketing strategy and execution proposal',
      category: 'Marketing',
      difficulty: 'Beginner',
      estimatedTime: '30 min',
      uses: 89,
      rating: 4.6,
      tags: ['Marketing', 'Digital', 'Strategy'],
      color: 'green'
    },
    {
      id: 3,
      title: 'Website Design & Development',
      description: 'Full-service web design and development project proposal',
      category: 'Design',
      difficulty: 'Advanced',
      estimatedTime: '60 min',
      uses: 156,
      rating: 4.9,
      tags: ['Web Design', 'Development', 'UX'],
      color: 'purple'
    },
    {
      id: 4,
      title: 'Business Consulting Services',
      description: 'Strategic business consulting and transformation proposal',
      category: 'Consulting',
      difficulty: 'Advanced',
      estimatedTime: '75 min',
      uses: 73,
      rating: 4.7,
      tags: ['Consulting', 'Strategy', 'Business'],
      color: 'orange'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'End-to-end mobile application development proposal',
      category: 'Development',
      difficulty: 'Intermediate',
      estimatedTime: '50 min',
      uses: 92,
      rating: 4.5,
      tags: ['Mobile', 'App', 'Development'],
      color: 'indigo'
    },
    {
      id: 6,
      title: 'E-commerce Setup & Optimization',
      description: 'Complete e-commerce platform setup and optimization proposal',
      category: 'E-commerce',
      difficulty: 'Intermediate',
      estimatedTime: '40 min',
      uses: 64,
      rating: 4.4,
      tags: ['E-commerce', 'Optimization', 'Sales'],
      color: 'pink'
    }
  ];

  const categories = ['All', 'SaaS', 'Marketing', 'Design', 'Consulting', 'Development', 'E-commerce'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="bg-secondary/50 p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Proposal Templates</h1>
        <p className="text-gray-600">Choose from our collection of proven proposal templates</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Create Custom Template Card */}
      <div className="bg-gradient-primary rounded-xl p-6 mb-8 text-white">
        <div className="flex max-md:flex-col max-md:gap-8 max-md:items-start items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Create Custom Template</h3>
            <p className="text-blue-100">Build your own reusable proposal template from scratch</p>
          </div>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Create Template
          </button>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
            <div className={`h-2 bg-gradient-to-r from-${template.color}-500 to-${template.color}-600`}></div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{template.title}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{template.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{template.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {template.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {template.estimatedTime}
                </div>
                <span>{template.uses} uses</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  template.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  template.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {template.difficulty}
                </span>
                
                <button 
                  onClick={() => onPageChange('generate')}
                  className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary transition-colors"
                >
                  Use Template
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State for No Results */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600 mb-4">Try selecting a different category or create a custom template</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Create Custom Template
          </button>
        </div>
      )}
    </div>
  );
};

export default Templates;