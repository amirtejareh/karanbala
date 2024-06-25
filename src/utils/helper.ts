import moment from "jalali-moment";

export const mobileNumberRegex = /^09\d{9}$/;
export const toPersianDate = ({
  value,
  format = "YYYY-MM-DD",
  locale = "fa",
}: {
  value: any;
  format?: string;
  locale?: string;
}) => {
  try {
    return moment(value, format).locale(locale).format(format);
  } catch (err) {
    return "";
  }
};

export const bytesToKilobytes = (bytes: number) => {
  return (bytes / 1024).toFixed(2);
};
