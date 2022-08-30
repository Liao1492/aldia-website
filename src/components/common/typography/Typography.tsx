import React from "react";
import styles from "../../../../styles/Typography.module.sass";

type HeadingProps = {
  id?: any;
  className?: any;
  style?: any;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  children: any;
};

type BodyTextProps = {
  id?: any;
  className?: any;
  style?: any;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  stress?: boolean;
  size: "lg" | "sm";
  children: any;
};

type ButtonTextProps = {
  id?: any;
  className?: any;
  style?: any;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  allCaps?: boolean;
  children: any;
};

type SpanTextProps = {
  id?: any;
  className?: any;
  style?: any;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  children: any;
};

const Heading1 = (props: HeadingProps) => {
  return (
    <h1
      id={props.id}
      className={[styles.heading1, props.className].join(" ")}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </h1>
  );
};

const Heading2 = (props: HeadingProps) => {
  return (
    <h2
      id={props.id}
      className={[styles.heading2, props.className].join(" ")}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </h2>
  );
};

const Heading3 = (props: HeadingProps) => {
  return (
    <h3
      id={props.id}
      className={[styles.heading3, props.className].join(" ")}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </h3>
  );
};

const Heading4 = (props: HeadingProps) => {
  return (
    <h4
      id={props.id}
      className={[styles.heading4, props.className].join(" ")}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </h4>
  );
};

const Heading5 = (props: HeadingProps) => {
  return (
    <h5
      id={props.id}
      className={[styles.heading5, props.className].join(" ")}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </h5>
  );
};

const Heading6 = (props: HeadingProps) => {
  return (
    <h6
      id={props.id}
      className={[styles.heading6, props.className].join(" ")}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </h6>
  );
};

const BodyText = (props: BodyTextProps) => {
  const textSize = {
    lg: styles.bodyTextLG,
    sm: styles.bodyTextSM,
  };
  return (
    <p
      id={props.id}
      className={`${textSize[props.size as keyof typeof textSize]} ${
        props.className
      } ${props.stress && styles.stress}`}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

BodyText.defaultProps = {
  stress: false,
};

const CaptionText = (props: BodyTextProps) => {
  const textSize = {
    lg: styles.bodyTextLG,
    sm: styles.bodyTextSM,
  };
  return (
    <p
      id={props.id}
      className={`${textSize[props.size as keyof typeof textSize]} ${
        props.className
      } ${props.stress && styles.stress}`}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

CaptionText.defaultProps = {
  stress: false,
};

const ButtonText = (props: ButtonTextProps) => {
  return (
    <p
      id={props.id}
      className={`${styles.buttonText} ${props.className} ${
        props.allCaps && styles.allCaps
      }`}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

ButtonText.defaultProps = {
  allCaps: false,
};

const Span = (props: SpanTextProps) => {
  return (
    <span
      id={props.id}
      className={props.className}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </span>
  );
};

ButtonText.defaultProps = {
  allCaps: false,
};

const LabelItalic = (props: HeadingProps) => {
  return (
    <p
      id={props.id}
      className={[styles.labelItalic, props.className].join(" ")}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  BodyText,
  CaptionText,
  ButtonText,
  Span,
  LabelItalic,
};
