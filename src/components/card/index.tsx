import { ChildrenProps } from '../../models/childrenProps'
import { CardMainContainer } from './styled'

interface CardComponentProps extends ChildrenProps {
  type: 'profile' | 'info'
}

export function CardComponent({ children, type }: CardComponentProps) {
  return <CardMainContainer type={type}>{children}</CardMainContainer>
}
