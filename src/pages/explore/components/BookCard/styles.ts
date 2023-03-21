import { styled } from '@/src/styles/stiches.config'

export const BookCardContainer = styled('div', {
  width: '19.87rem',
  backgroundColor: '$gray700',
  borderRadius: '$md',
  display: 'flex',
  gap: '$5',
  padding: '$4 $5',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$gray600',
  },
})
export const BookInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
export const TitleBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    '&:first-child': {
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 'bold',
    },

    '&:last-child': {
      fontSize: '$sm',
      color: '$gray400',
      fontWeight: 'regular',
    },
  },
})

export const ReadingTag = styled('div', {
  backgroundColor: '$green300',
  padding: '$1 $3',
  fontSize: '$xs',
  color: '$green100',
  position: 'absolute',
  top: 0,
  right: 0,

  borderTopRightRadius: '$md',
  borderBottomLeftRadius: '$sm',
})