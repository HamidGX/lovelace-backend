import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL]

const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.includes(origin)) {
			// Puede consultar la API
			callback(null, true)
		} else {
			// No esta permitido
			const error = new Error('Error de Cors')
			callback(error)
		}
	},
}

app.get('/', async (req, res) => {
	res.status(200).json({
		message:
			'Hola, bienvenido a la API de Lovelace. Esta API es privada, por lo que no se permite realizar consultas a esta misma.',
	})
})

app.use(cors(corsOptions))
// Manejar errores de CORS
app.use((err, req, res, next) => {
	if (err.message === 'Error de Cors') {
		res.status(403).json({ error: 'Acceso no permitido desde este origen.' })
	} else {
		// Otro tipo de errores
		res.status(500).json({ error: 'Ocurrió un error en el servidor.' })
	}
})
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

const startServer = async () => {
	try {
		connectDB(process.env.MONGODB_URL)
		app.listen(8080, () =>
			console.log('Server started on port http://localhost:8080')
		)
	} catch (error) {
		console.log(error)
	}
}

startServer()
