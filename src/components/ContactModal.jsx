import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: '20px'
};



export default function ContactModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen} className='animate-btn'>Contact Us</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ ...style, width: '90%' }}>
                    <Button sx={{color : "black" , backgroundColor : 'white' , px : '10px' , borderRadius : "5px" , ml : 'auto' , display : 'block'}} onClick={handleClose}>Close</Button>
                    <div className='flex flex-col items-center justify-between gap-5 p-10 text-center'>

                        <h2 id="modal-title" className='text-7xl text-white font-pp-formula-condensed'>Get Free Consulation</h2>
                        <p id="modal-description" className='text-white font-neue-montreal'>
                            Get a free consultation and discover how our design expertise can elevate your project. Our team will offer personalized insights and actionable recommendations to enhance your user experience and interface design. Leave your email and transform your project today!
                        </p>
                        <p className='text-white capitalize text-xl font-pp-formula-condensed'>GET IN TOUCH</p>
                        <p className='text-[#FF7769] capitalize text-xl font-pp-formula-condensed'>INFO@GAPSYSTUDIO.COM</p>
                        <p className='text-[#FF7769] capitalize text-xl font-pp-formula-condensed'>+19098172580</p>
                        <div className='flex w-full gap-4'>
                            <input type='email' placeholder='Enter your emeil' className='bg-white flex-1 rounded-md p-2 '/>
                            <button className='upload-btn'>Get Consulation</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
