<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Client;
use App\Repository\ClientRepository;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index(ClientRepository $clientRepository): Response
    {
        /* $client = new Client("Xavier", "Fine", "xavier.fine@gmail.com", "Saint Blaise 05100 Briançon", "0685469875");
        $clientRepository->add($client, true); */
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/client/{id}", name="client")
     */
    public function showClient($id): Response
    {
        return $this->render('client/index.html.twig', ['id' => $id]);
    }
}
