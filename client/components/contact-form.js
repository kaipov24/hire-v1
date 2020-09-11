import React from 'react'
import { TextField, makeStyles, FormControlLabel, Radio } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    },
    backgroundColor: 'white',
    width: '75%',

    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'column',
    margin: 'auto'
  },
  formInput: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  formInputWrapper: {
    margin: 'auto',
    width: '75%'
  },
  inputTitle: {
    display: 'flex',
    justifyContent: 'center'
  },
  inputBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  dateForm: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dateField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}))



const Contact = () => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.formInputWrapper}>
        <div className={classes.inputBlock}>
          <p className={classes.inputTitle}>Фамилия имя отчество</p>
          <div className={classes.formInput}>
            <TextField id="standard-basic" label="Фамилия" />
            <TextField id="standard-basic" label="Имя" />
            <TextField id="standard-basic" label="Отчество" />
          </div>
        </div>
        <div className={classes.inputBlock}>
          <p className={classes.inputTitle}>Режим(удаленно или офис)</p>
          <div className={classes.formInput}>
            <FormControlLabel value="female" control={<Radio />} label="Удаленно" />
            <FormControlLabel value="male" control={<Radio />} label="Офис" />
            <FormControlLabel value="other" control={<Radio />} label="Удаленно/офис" />
          </div>
        </div>
        <div className={classes.inputBlock}>
          <p className={classes.inputTitle}>Опыт работы</p>
          <div className={classes.formInput}>
            <TextField id="standard-basic" label="Опыт работы" />

            <form className={classes.dateForm} noValidate>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue={new Date()}
                className={classes.dateField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </form>
  )
}

Contact.propTypes = {}

export default React.memo(Contact)
