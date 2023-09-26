//package com.ikhsansdq.demo
//
//import org.springframework.boot.autoconfigure.SpringBootApplication
//import org.springframework.boot.runApplication
//import org.springframework.context.annotation.Configuration
//import org.springframework.data.annotation.Id
//import org.springframework.data.relational.core.mapping.Table
//import org.springframework.data.repository.CrudRepository
//import org.springframework.stereotype.Service
//import org.springframework.web.bind.annotation.CrossOrigin
//import org.springframework.web.bind.annotation.GetMapping
//import org.springframework.web.bind.annotation.PostMapping
//import org.springframework.web.bind.annotation.RequestBody
//import org.springframework.web.bind.annotation.RestController
//import org.springframework.web.bind.annotation.PathVariable
//import org.springframework.web.bind.annotation.RequestMapping
//import org.springframework.web.servlet.config.annotation.CorsRegistry
//import org.springframework.web.servlet.config.annotation.EnableWebMvc
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
//import java.util.Optional
//
//@SpringBootApplication
//class DemoBackUpApplication
//
//fun main(args: Array<String>) {
//    runApplication<DemoApplication>(*args)
//}
//
//@RestController
//@RequestMapping("/")
//class MessageController(val service: MessageService) {
//    @GetMapping("/")
//    @CrossOrigin(origins = ["http://127.0.0.1:5173/"])
//    fun index(): List<NewMessage> = service.findMessages()
//
//    @GetMapping("/{id}")
//    fun index(@PathVariable id: String): List<NewMessage> =
//        service.findMessageById(id)
//
//    @PostMapping("/")
//    fun post(@RequestBody newMessage: NewMessage) {
//        service.save(newMessage)
//    }
//}
//
//@Service
//class MessageService(val db: MessageRepository) {
//    fun findMessages(): List<NewMessage> = db.findAll().toList()
//
//    fun findMessageById(id: String): List<NewMessage> =
//        db.findById(id).toList()
//
//    fun save(newMessage: NewMessage) {
//        db.save(newMessage)
//    }
//
//    fun <T : Any> Optional<out T>.toList(): List<T> =
//        if (isPresent) listOf(get()) else emptyList()
//}
//
////@Table("MESSAGES")
////data class Message(@Id val id: String?, val text: String)
//
//@Table("NEWMESSAGES")
//data class NewMessage(@Id val id: String?, val title: String, val description: String)
//
//interface MessageRepository : CrudRepository<NewMessage, String>
//
//@Configuration
//@EnableWebMvc
//class WebConfig : WebMvcConfigurer {
//    override fun addCorsMappings(registry: CorsRegistry) {
//        registry.addMapping("/api/**")
//            .allowedOrigins("http://127.0.0.1:5173/")
//            .allowedMethods("GET", "POST", "PUT", "DELETE")
//            .allowedHeaders("*")
//            .allowCredentials(true)
//    }
//}
