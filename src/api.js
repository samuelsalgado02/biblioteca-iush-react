

const API_URL = "http://localhost:3000/api/libros";

/**
 * Obtiene todos los libros desde el backend
 * @returns {Promise<Array>} Lista de libros
 */
export async function getLibros() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Error al obtener libros");
        }
        return await response.json();
    } catch (error) {
        console.error("Error en getLibros:", error);
        return [];
    }
}

/**
 * Agrega un nuevo libro al backend
 * @param {Object} libro - Objeto con los datos del libro
 * @returns {Promise<Object>} Respuesta del backend
 */
export async function addLibro(libro) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(libro),
        });

        if (!response.ok) {
            throw new Error("Error al agregar libro");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en addLibro:", error);
        throw error;
    }
}

// Eliminar libro por ID
export async function deleteLibro(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error al eliminar libro');
    }
    return response.json();
}



