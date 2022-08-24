import cn from 'classnames';
import React, { FC, useState } from 'react';
import ReactSelect, { components, StylesConfig, DropdownIndicatorProps } from 'react-select';
import { ISelect, SelectValue } from '../../../types/ISelect';
import './Select.scss';

import Select, { IndicatorSeparatorProps } from 'react-select';
import { colors } from 'react-select/dist/declarations/src/theme';

export const SelectComponent = ({ onChange, options, value }: ISelect) => {

  const indicatorSeparatorStyle = {
    alignSelf: 'stretch',
    backgroundColor: '#AFB2B6',
    marginBottom: 8,
    marginTop: 8,
    width: 1,
  };

  interface Style {
    control: (e:any) => any;
    dropdownIndicator: (e:any) => any;
    clearIndicator: (e:any) => any;
    menu: (e:any) => any;
    option: (e:any) => any;
    input: (e:any) => any;
    multiValue: (e:any) => any;
    multiValueLabel: (e:any) => any;
    multiValueRemove: (e:any) => any;
  }

  const selectStyle: Style = {
    control: (base) => ({
      ...base,
      fontSize: 16,
      borderRadius: 10,
      height: 56,
      backgroundColor: '#323537',
      border: 'none',
      borderColor: 'none',
      '&:focus': { outline: '2px solid #7B61FF' }
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#AFB2B6',
      '&:hover': { color: '#fff' }
    }),
    clearIndicator: (base) => ({
      ...base, 
      color: '#AFB2B6',
      '&:hover': { color: '#fff' }
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#323537'
    }),
    option: (base) => ({
      ...base,
      backgroundColor: 'inherit',
      '&:hover': { backgroundColor: '#000'}
    }),
    input: (base) => ({
      ...base,
      color: '#fff'
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#191b1c',
      borderRadius: 5
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: '#fff'
    }),
    multiValueRemove: (base) => ({
      ...base,
      '&:hover': {backgroundColor: '#AFB2B6', color: '#fff'},
    })

  };

  const IndicatorSeparator = ({
    innerProps,
  }: IndicatorSeparatorProps<SelectValue, true>) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  return (
    <Select
      closeMenuOnSelect={false}
      components={{ IndicatorSeparator }}
      isMulti
      options={options}
      value={value}
      onChange={e => onChange(e)}
      styles={selectStyle}
      noOptionsMessage={()=> 'Ничего не найдено'}
    />
  )

}

export default SelectComponent;





// const SelectComponent = ({ selectPlaceholder, name, onChange, options, value }: ISelect) => {
//   const [openOptions, setOpenOptions] = useState(false);
//   return (
//     <div id={name} className='select__container'>
//       <button className='select__toggle' onClick={() => { setOpenOptions(!openOptions) }} ></button>
//       <ul className={cn('select__options', !openOptions ? 'hidden' : '')}>
//         {options.map(item => (
//           <li className='select__options_option'>{item.label}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default SelectComponent;