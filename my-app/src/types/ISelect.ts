export type SelectValue = {
    label: string;
    value: string;
}

export interface ISelect {
    name?: string;
    onChange: (e: unknown) => void;
    options: SelectValue[];
    value?: SelectValue | unknown; 
}

// export interface IndicatorSeparatorProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CommonPropsAndClassName<Option, IsMulti, Group> {
//     isDisabled: boolean;
//     isFocused: boolean;
//     innerProps?: JSX.IntrinsicElements['span'];
// }

