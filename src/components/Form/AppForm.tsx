import React from "react";

interface IInputKitProps {
    formId: string;
    children: any;
    onSubmit: any;
    className?: any;
}

const AppForm: React.FC<IInputKitProps> = (props) => {
    const { formId, onSubmit, children, ...otherProps } = props;

    return (
        <form id={formId} onSubmit={onSubmit} {...otherProps}>
            {children}
        </form>
    );
};

export default AppForm;
