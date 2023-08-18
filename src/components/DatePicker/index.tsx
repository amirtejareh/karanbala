import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Theme } from '@mui/material'
import { withStyles } from '@mui/styles'

export const StyledDatePicker = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    '& span ': {
      color: theme.palette.text.primary,
    },
    '& svg': {
      fill: theme.palette.text.primary,
    },
    '& .MuiPickersDay-root': {
      // backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
      },
      '&.Mui-selected': {
        color: `${theme.palette.text.primary} !important`,
        backgroundColor: theme.palette.primary.main,
      },
      '&:focus.Mui-selected': {
        color: `${theme.palette.text.primary} !important`,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))(DatePicker)
