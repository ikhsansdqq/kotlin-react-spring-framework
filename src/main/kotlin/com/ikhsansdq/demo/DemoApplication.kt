package com.ikhsansdq.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
    runApplication<DemoApplication>(*args)
}

@RestController
@RequestMapping("/messages/api/")
class MessageController(val service: MessageService) {
    @GetMapping("/")
    @CrossOrigin(origins = ["http://localhost:3000/"])
    fun index(): List<NewMessage> = service.findMessages()

    @GetMapping("/messages/api/{id}")
    fun index(@PathVariable id: String): NewMessage? =
        service.findMessageById(id)

    @PostMapping("/messages/api/")
    fun post(@RequestBody newMessage: NewMessage) {
        service.save(newMessage)
    }
}

@Service
class MessageService(val db: MessageRepository) {
    fun findMessages(): List<NewMessage> = db.findAll()

    fun findMessageById(id: String): NewMessage? = db.findById(id).orElse(null)

    fun save(newMessage: NewMessage) {
        db.save(newMessage)
    }
}

@Document("message")
data class NewMessage(@Id val id: String, val title: String, val description: String)

interface MessageRepository : MongoRepository<NewMessage, String>

@Configuration
@EnableWebMvc
class WebConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:3000/")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*")
            .allowCredentials(true)
    }
}
