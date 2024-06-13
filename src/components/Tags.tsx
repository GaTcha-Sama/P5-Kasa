import React from 'react';
import '../styles/Tags.scss';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <ul className='tags'>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
}

export default Tags;
