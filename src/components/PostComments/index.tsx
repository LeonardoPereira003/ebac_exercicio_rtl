import { FormEvent, useState } from 'react'
import styles from './PostComments.module.css'

// Modelo do comentário
import Comment from '../../models/Comment'

// Componente responsável por listar e adicionar comentários
const Post = () => {
    // Estado que armazena a lista de comentários
    const [comments, setComments] = useState<Comment[]>([])

    // Estado temporário para o texto digitado no textarea
    const [tempComment, setTempComment] = useState('')

    // Função executada ao enviar o formulário
    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        // Evita o recarregamento da página
        event.preventDefault()

        // Cria um novo comentário com id e texto
        const newComment = new Comment(comments.length, tempComment)

        // Limpa o campo de texto após o envio
        setTempComment('')

        // Atualiza o estado adicionando o novo comentário à lista
        setComments([...comments, newComment])
    }

    return (
        <div>
            {/* Lista de comentários renderizados */}
            <ul
                className={styles['post-comments']}
                data-testid="comment-list"
            >
                {comments.map(({ comment, id }) => (
                    <li className={styles['post-comment']} key={id}>
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>

            {/* Formulário para adicionar novos comentários */}
            <form
                onSubmit={handleAddComment}
                className={styles['post-comments-form']}
            >
                {/* Campo de texto para digitar o comentário */}
                <textarea
                    value={tempComment}
                    onChange={e => setTempComment(e.target.value)}
                    required
                    className={styles['post-comments-form-textarea']}
                    data-testid="comment-input"
                />

                {/* Botão responsável por enviar o comentário */}
                <button
                    type="submit"
                    className={styles['post-comments-form-button']}
                    data-testid="comment-button"
                >
                    Comentar
                </button>
            </form>
        </div>
    )
}

export default Post
