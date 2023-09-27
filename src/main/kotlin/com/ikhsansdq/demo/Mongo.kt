package com.ikhsansdq.demo

import com.mongodb.client.model.Filters.eq
import com.mongodb.kotlin.client.coroutine.MongoClient
import kotlinx.coroutines.flow.firstOrNull
import kotlinx.coroutines.runBlocking
import org.bson.Document

fun main(){
    val uri = "mongodb+srv://ikhsansdq:Hoodwink77@clusterdefault.clw114s.mongodb.net/?retryWrites=true&w=majority"
    val mongoClient = MongoClient.create(uri)
    val database = mongoClient.getDatabase("mydb")
    val collection = database.getCollection<Document>("message")
    runBlocking {
        val doc = collection.find(eq("title", "Mongo Cluster")).firstOrNull()
        if (doc != null) {
            println(doc.toJson())
        } else {
            println("No matching documents found.")
        }
    }
    mongoClient.close()
}