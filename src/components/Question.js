import React from 'react'

function Option({checked, title, id, handleChange}) {
  const isChecked = checked || false;

  return (
    <div>
      <input 
        id={`radio-${id}`} 
        className="peer/draft form-radio mr-2 mb-0.5 border-slate-300 text-sky-400 focus:ring-sky-300" 
        type="radio" 
        name={`field-name-${id}`} 
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="peer-checked/draft:text-sky-500 font-medium" for={`radio-${id}`}>{title}</label>
    </div>
  );
}

function Question({ title, options, classname }) {
  return (
    <div className={classname}>
      <h2 className="text-xl py-3 text-center">{title}</h2>
      {
        options.length &&
        options.map((option, index) => <Option key={index} id={index} title={option.title} />)
      }
    </div>
  )
}

export default Question;

