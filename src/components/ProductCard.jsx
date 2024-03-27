import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { Box, Button, Stack } from '@mui/material'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

export default function ProductCard({ cardData }) {
  const addtoCart = e => {
    e.stopPropagation()
    toast.success('Added to cart!')
  }

  const navigate = useNavigate()

  const NavigatetoProductDetail = id => {
    navigate(`/${id}`)
  }

  console.log('Cart Data', cardData)

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
        cursor: 'pointer',
      }}
      raised={false}
      onClick={() => {
        NavigatetoProductDetail(cardData?.id)
      }}
    >
      <Box>
        <Box
          sx={{
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component='img'
            height='200'
            image={cardData?.image}
            sx={{
              objectFit: 'fill',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'all 1s ease',
              },
            }}
          />
        </Box>

        <CardContent>
          <Stack direction={'column'} spacing={2} alignItems={'center'}>
            <Typography textAlign={'center'} variant='p' color='text.secondary'>
              {cardData?.title}
            </Typography>
            <Typography>Rs {cardData?.price}</Typography>

            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Rating
                initialValue={
                  cardData?.rating?.rate ? cardData?.rating?.rate : 0
                }
                readonly
                size={20}
              />
              <Typography
                sx={{
                  fontSize: '12px',
                  alignSelf: 'flex-start',
                }}
              >
                ({cardData?.rating?.count ? cardData?.rating?.count : 0})
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Box>

      <CardActions disableSpacing>
        <Button fullWidth variant='contained' onClick={addtoCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  )
}
