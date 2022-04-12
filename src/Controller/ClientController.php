<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Client;
use App\Repository\ClientRepository;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ClientController extends AbstractController
{
    /**
    * @Route("/api/clients", name="clients")
    * @return \Symfony\Component\HttpFoundation\JsonResponse
    */
    public function getClients(ClientRepository $clientRepository)
    {
        $clients = $clientRepository->findAll();

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getName();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $serializer = new Serializer([$normalizer], [$encoder]);
        $jsonContent = $serializer->serialize($clients, 'json');
    
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent($jsonContent);
        
        return $response;
    }

    /**
    * @Route("/api/client/{id}", name="oneClient")
    * @return \Symfony\Component\HttpFoundation\JsonResponse
    */
    public function getOneClient(ClientRepository $clientRepository, $id)
    {
        $client = $clientRepository->find($id);
 
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getName();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $serializer = new Serializer([$normalizer], [$encoder]);
 
        $jsonContent = $serializer->serialize($client, 'json');
    
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent($jsonContent);
        
        return $response;
    }

    /**
    * @Route("/api/remove/{id}", name="remove")
    * @return \Symfony\Component\HttpFoundation\JsonResponse
    */
    public function removeClient(ClientRepository $clientRepository, $id)
    {
        $client = $clientRepository->find($id);
        if ($client) {
            $clientRepository->remove($client);
        }

        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent(true);
        
        return $response;
    }

    /**
    * @Route("/api/add", name="add")
    */
    public function addClient(Request $request, Serializer $serializer, ClientRepository $clientRepository): Response
    {
        $jsonResponse = $request->getContent();
        var_dump($jsonResponse);

        $client = $serializer->deserialize($jsonResponse,
            Client::class, 'xml');

        $client = $clientRepository->add($client);

        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent(true);
        
        return $response;
    }
}
