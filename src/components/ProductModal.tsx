import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '5px',
  minWidth: '100px',
  p: 4,
};

interface ProductModalProps {
    opened: boolean,
    onClose: Function,
    id?: number,
    name?: string,
    year?: number,
    color?: string,
    pantone_value?: string,
}

function ProductModal(props: ProductModalProps) {

  return (
    <Modal
        open={props.opened}
        onClose={() => props.onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style, 'backgroundColor': props.color}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            ID: {props.id} <br/>
            Name: {props.name} <br/>
            Year: {props.year} <br/>
            Color: {props.color} <br/>
            Pantone value: {props.pantone_value} <br/>
          </Typography>
        </Box>
      </Modal>
  );
}

export default ProductModal;