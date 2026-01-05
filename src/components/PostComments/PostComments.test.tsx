import { render, screen, fireEvent } from '@testing-library/react'
import PostComments from './index'

// Teste do componente PostComments
describe('PostComments', () => {
    test('deve permitir inserir dois comentários', () => {
        // Renderiza o componente em ambiente de teste
        render(<PostComments />)

        // Captura os elementos usando data-testid
        const input = screen.getByTestId('comment-input')
        const button = screen.getByTestId('comment-button')
        const list = screen.getByTestId('comment-list')

        // Simula a digitação do primeiro comentário
        fireEvent.change(input, {
            target: { value: 'Primeiro comentário' }
        })
        fireEvent.click(button)

        // Simula a digitação do segundo comentário
        fireEvent.change(input, {
            target: { value: 'Segundo comentário' }
        })
        fireEvent.click(button)

        // Verifica se dois comentários foram adicionados à lista
        expect(list.children.length).toBe(2)

        // Verifica se os textos estão visíveis na tela
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
    })
})
