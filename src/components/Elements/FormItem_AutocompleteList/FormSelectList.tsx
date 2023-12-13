import React, { FC, ReactElement } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikHelpers } from 'formik';
import style from './style.module.scss';

import { createStyles, makeStyles, useTheme, Theme } from '@mui/material/styles';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { AuthorObjectType } from '../../../types/types';
import { Autocomplete, TextField } from '@mui/material';

//Documentation here: https://v4.mui.com/ru/components/selects/

export type CustomSelectOption<T> = {
  label: string;
  value: T;
};

export type CustomSelect<T> = {
  // options: CustomSelectOption<T>[];
  label: string;
  options: any;
  value: T;
  onChange(value: T): any; //todo: fix it!
};

interface AutocompleteListProps {
  required: boolean;
  label: string;
  options: any;
  // authors: AuthorObjectType[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

const AutocompleteList: React.FC<AutocompleteListProps> = (props) => {

  console.log('Props target', props);

  const options = props.options;
  // const selectedItem = options.find((o) => o.value === props.value);
  // const label = selectedItem?.label ?? 'Select Option...';
  // console.log(options);

  // const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: any) => {
  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  const handleChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  interface User {
    id: number;
    name: string;
  }

  const userList: User[] = [
    { id: 1, name: "name 1" },
    { id: 2, name: "name 2" },
  ];

  const [value, setValue] = React.useState<any>();

  return <FormControl className = {style.formControl}>
    {/*<InputLabel id = 'demo-mutiple-chip-label'>{props.label}</InputLabel>*/}
    {/*<Select
      labelId = 'demo-mutiple-chip-label'
      id = 'demo-mutiple-chip'
      multiple
      value = {personName}
      onChange = {handleChange}
      input = {<Input id = 'select-multiple-chip' />}
      renderValue = {(selected) => (
        <div className = {style.chips}>
          {(selected as string[]).map((value) => (
            <Chip key = {value} label = {value} className = {style.chip} />
          ))}
        </div>
      )}
      MenuProps = {MenuProps}
    >
      {options.map((name: any) => ( //todo: fix it
        <MenuItem key = {name} value = {name} style = {getStyles(name, personName, theme)}>
          {name}
        </MenuItem>
      ))}
    </Select>*/}

    <Autocomplete
      className={style.autocompleteWrapper}
      id="tags-filled"
      value = {value}
      size="small"
      onChange = {(event, newValue) => {
        setValue(newValue);
      }}
      multiple
      freeSolo
      options = {props.options.map((option:any) => option.value)}
      renderTags = {(value: string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            variant = "outlined"
            label = {option}
            {...getTagProps({ index })}
            className = {style.chip}
            key = {option}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={props.label}
          placeholder={props.label}
          className = {style.textField}
          required={props.required}
        />
      )}
    />

  </FormControl>;
};

export default AutocompleteList;
